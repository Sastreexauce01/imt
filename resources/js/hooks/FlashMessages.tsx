// hooks/FlashMessages.tsx
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { toast } from 'sonner';

const useFlashMessages = () => {
    const { props } = usePage<SharedData>();

    useEffect(() => {
        const flash = props.flash || {};
        
        console.log('📬 Flash messages:', flash); // Pour déboguer
        
        if (flash.success) {
            toast.success(flash.success, {
                duration: 4000,
            });
            
            // 🎉 Lancer le confetti
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.5 },
            });
        }
        
        if (flash.error) {
            toast.error(flash.error, {
                duration: 5000,
            });
        }
        
        if (flash.info) {
            toast.info(flash.info, {
                duration: 4000,
            });
        }
    }, [props.flash]);
};

export default useFlashMessages;