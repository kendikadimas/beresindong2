<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/composables/useInitials';
import type { User } from '@/types';
import { computed } from 'vue';

interface Props {
    user: User | null;
    showEmail?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    showEmail: false,
    user: null
});

const { getInitials } = useInitials();

// Compute whether we should show the avatar image
const showAvatar = computed(() => {
    // Hanya akses props.user.avatar jika props.user tidak null
    return props.user && props.user.avatar && props.user.avatar !== '';
});
</script>

<template>
    <div class="flex items-center">
        <Avatar class="h-8 w-8 overflow-hidden rounded-lg">
            <AvatarImage v-if="showAvatar" :src="props.user!.avatar!" :alt="props.user!.name!" />
            <AvatarFallback class="rounded-lg text-black dark:text-white">
                {{ props.user ? getInitials(props.user.name) : 'GA' }}
            </AvatarFallback>
        </Avatar>

        <div class="grid flex-1 text-left text-sm leading-tight ml-2">
            <span v-if="props.user" class="truncate font-medium">{{ props.user.name }}</span>
            <span v-else class="truncate font-medium">Guest</span>

            <span v-if="showEmail && props.user" class="truncate text-xs text-muted-foreground">{{ props.user.email }}</span>
        </div>
    </div>
</template>
