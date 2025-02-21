import { AssetSync } from "@/components/assetsSync";
import { WalletList } from "@/components/WalletList";
import { getAssets } from "@/queries/queries";
import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { TableAssetRow } from "./tableAssetRow";


export default async function AssetListPage(
  {searchParams}:
  {searchParams: Promise<{wallet_id: string}>
  }) {
  const { wallet_id } = await searchParams;
  const assets = await getAssets();
  
  if (!wallet_id) {
    return <WalletList />;
  }

  return (
    <div className="flex flex-col space-y-5 flex-grow">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-w-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableAssetRow key={key} asset={asset} walletId={wallet_id}/>
            ))}
            
          </TableBody>
        </Table>
      </div>
      <AssetSync assetSymbols={assets.map(asset => asset.symbol)}/>
    </div>
  );
}
