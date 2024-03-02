import Link from 'next/link';
import Image from 'next/image';

const Post = () => {
  return (
    <div className="flex flex-col px-2 mt-4">
      <Image src="/img/baris.jpg" alt="Barış" width={1920} height={1080} />
      <nav className="rounded-md w-full mt-3">
        <ol className="list-reset flex justify-end text-sm">
          <li><Link href="/"><span className="text-blue-600 hover:text-blue-700">Anasayfa</span></Link></li>
          <li><span className="text-gray-500 mx-2">/</span></li>
          <li><Link href="/blog"><span className="text-gray-500">Blog</span></Link></li>
        </ol>
      </nav>

      <h4 className="font-semibold text-lg my-3 border-b-1">Lorem Ipsum Dolor Sit Amet</h4>
      <p className="indent-4 mb-3">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
      <p className="indent-4 mb-3">Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan de Finibus Bonorum et Malorum (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan Lorem ipsum dolor sit amet 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
    </div>
  )
};

export default Post;