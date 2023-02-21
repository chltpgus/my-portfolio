import { useEffect } from 'react';
import ChannelService from '@/data/ChannelService';

export default function ChannelTalk() {
    useEffect(() => {
        ChannelService.boot({
            pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY,
        });

        return () => {
            ChannelService.shutdown();
        };
    }, []);
    return null;
}