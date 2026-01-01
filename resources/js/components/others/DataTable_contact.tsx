/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    ColumnDef,
    ColumnFiltersState,
    Row,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
    ColumnsIcon,
    EyeIcon,
    MoreVerticalIcon,
    TrashIcon,
} from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Contact } from '@/types';

const columns: ColumnDef<Contact>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Tout sélectionner"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Sélectionner"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: 'Nom complet',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    <span className="font-medium">
                        {row.original.surname} {row.original.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                        {row.original.email}
                    </span>
                </div>
            );
        },
        enableHiding: false,
    },
    {
        accessorKey: 'tel',
        header: 'Téléphone',
        cell: ({ row }) => <div className="text-sm">{row.original.tel}</div>,
    },
    {
        accessorKey: 'subject',
        header: 'Sujet',
        cell: ({ row }) => (
            <Badge variant="outline" className="px-2 text-xs">
                {row.original.subject}
            </Badge>
        ),
    },
    {
        accessorKey: 'content',
        header: 'Message',
        cell: ({ row }) => (
            <div className="max-w-xs truncate text-sm text-muted-foreground">
                {row.original.content}
            </div>
        ),
    },
    {
        accessorKey: 'created_at',
        header: 'Date de réception',
        cell: ({ row }) => (
            <div className="text-sm">
                {new Date(row.original.created_at).toLocaleDateString('fr-FR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                })}
            </div>
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <ContactDetailsSheet contact={row.original} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="size-8 text-muted-foreground"
                            size="icon"
                        >
                            <MoreVerticalIcon className="size-4" />
                            <span className="sr-only">Ouvrir le menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem>
                            <EyeIcon className="mr-2 size-4" />
                            Voir les détails
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <TrashIcon className="mr-2 size-4" />
                            Supprimer
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];

function DraggableRow({ row }: { row: Row<Contact> }) {
    return (
        <TableRow data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}

export function DataTable_contact({ data: initialData }: { data: Contact[] }) {
    const [data, setData] = React.useState(() => initialData);
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            pagination,
        },
        getRowId: (row) => row.id.toString(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
        <div className="flex w-full flex-col gap-6">
            {/* Header avec recherche et filtres */}
            <div className="flex items-center justify-between px-4 lg:px-6">
                <div className="flex flex-1 items-center gap-2">
                    <Input
                        placeholder="Rechercher par nom, email..."
                        value={
                            (table
                                .getColumn('name')
                                ?.getFilterValue() as string) ?? ''
                        }
                        onChange={(event) =>
                            table
                                .getColumn('name')
                                ?.setFilterValue(event.target.value)
                        }
                        className="h-9 w-full max-w-sm"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <ColumnsIcon className="size-4" />
                                <span className="hidden lg:inline">
                                    Colonnes
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) =>
                                        typeof column.accessorFn !==
                                            'undefined' && column.getCanHide(),
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id === 'name' &&
                                                'Nom complet'}
                                            {column.id === 'tel' && 'Téléphone'}
                                            {column.id === 'subject' && 'Sujet'}
                                            {column.id === 'content' &&
                                                'Message'}
                                            {column.id === 'created_at' &&
                                                'Date de réception'}
                                        </DropdownMenuCheckboxItem>
                                    );
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Tableau */}
            <div className="relative overflow-auto px-4 lg:px-6">
                <div className="overflow-hidden rounded-lg border">
                    <Table>
                        <TableHeader className="bg-muted">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                colSpan={header.colSpan}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext(),
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table
                                    .getRowModel()
                                    .rows.map((row) => (
                                        <DraggableRow key={row.id} row={row} />
                                    ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        Aucun résultat trouvé.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 lg:px-6">
                <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
                    {table.getFilteredSelectedRowModel().rows.length} sur{' '}
                    {table.getFilteredRowModel().rows.length} ligne(s)
                    sélectionnée(s).
                </div>
                <div className="flex w-full items-center gap-8 lg:w-fit">
                    <div className="hidden items-center gap-2 lg:flex">
                        <Label
                            htmlFor="rows-per-page"
                            className="text-sm font-medium"
                        >
                            Lignes par page
                        </Label>
                        <Select
                            value={`${table.getState().pagination.pageSize}`}
                            onValueChange={(value) => {
                                table.setPageSize(Number(value));
                            }}
                        >
                            <SelectTrigger className="w-20" id="rows-per-page">
                                <SelectValue
                                    placeholder={
                                        table.getState().pagination.pageSize
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent side="top">
                                {[10, 20, 30, 40, 50].map((pageSize) => (
                                    <SelectItem
                                        key={pageSize}
                                        value={`${pageSize}`}
                                    >
                                        {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-fit items-center justify-center text-sm font-medium">
                        Page {table.getState().pagination.pageIndex + 1} sur{' '}
                        {table.getPageCount()}
                    </div>
                    <div className="ml-auto flex items-center gap-2 lg:ml-0">
                        <Button
                            variant="outline"
                            className="hidden size-8 lg:flex"
                            size="icon"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span className="sr-only">Première page</span>
                            <ChevronsLeftIcon className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="size-8"
                            size="icon"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span className="sr-only">Page précédente</span>
                            <ChevronLeftIcon className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="size-8"
                            size="icon"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <span className="sr-only">Page suivante</span>
                            <ChevronRightIcon className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="hidden size-8 lg:flex"
                            size="icon"
                            onClick={() =>
                                table.setPageIndex(table.getPageCount() - 1)
                            }
                            disabled={!table.getCanNextPage()}
                        >
                            <span className="sr-only">Dernière page</span>
                            <ChevronsRightIcon className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Composant Sheet pour afficher les détails du contact
function ContactDetailsSheet({ contact }: { contact: Contact }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                    <EyeIcon className="size-4" />
                    <span className="sr-only">Voir les détails</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="flex w-full flex-col overflow-y-auto px-1"
            >
                <SheetHeader className="gap-1">
                    <SheetTitle>Détails du message</SheetTitle>
                    <SheetDescription>
                        Message reçu le{' '}
                        {new Date(contact.created_at).toLocaleDateString(
                            'fr-FR',
                            {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            },
                        )}
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-1 flex-col gap-6 py-6 text-sm">
                    {/* Informations de contact */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold">
                            Informations de contact
                        </h3>
                        <div className="grid gap-3 rounded-lg border p-4">
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground">
                                    Prénom :
                                </span>
                                <span className="col-span-2 font-medium">
                                    {contact.surname}
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground">
                                    Nom :
                                </span>
                                <span className="col-span-2 font-medium">
                                    {contact.name}
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground">
                                    Email :
                                </span>
                                <span className="col-span-2 font-medium">
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-primary hover:underline"
                                    >
                                        {contact.email}
                                    </a>
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <span className="text-muted-foreground">
                                    Téléphone :
                                </span>
                                <span className="col-span-2 font-medium">
                                    <a
                                        href={`tel:${contact.tel}`}
                                        className="text-primary hover:underline"
                                    >
                                        {contact.tel}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Sujet du message */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold">Sujet</h3>
                        <div className="rounded-lg border p-4">
                            <Badge variant="secondary" className="text-sm">
                                {contact.subject}
                            </Badge>
                        </div>
                    </div>

                    {/* Contenu du message */}
                    <div className="space-y-3">
                        <h3 className="text-base font-semibold">Message</h3>
                        <div className="rounded-lg border p-4">
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                {contact.content}
                            </p>
                        </div>
                    </div>
                </div>

                <SheetFooter className="mt-auto flex gap-2 sm:flex-col sm:space-x-0">
                    <Button className="w-full" asChild>
                        <a href={`mailto:${contact.email}`}>
                            Répondre par email
                        </a>
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full">
                            Fermer
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
