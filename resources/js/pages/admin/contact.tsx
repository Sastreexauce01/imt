import { AppSidebar } from '@/components/app-sidebar';
import { DataTable_contact } from '@/components/others/DataTable_contact';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { Contact } from '@/types';

interface typeProps {
    contacts: Contact[];
}
export default function Page({ contacts }: typeProps) {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader title="Contact" />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <DataTable_contact data={contacts} />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}