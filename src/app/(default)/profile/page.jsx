import Image from 'next/image';

const Profile = () => {
  return(
    <>
    <div className="flex px-2 py-4">
      <div className="w-20 h-20 flex-shrink-0"><Image src="/img/baris.jpg" alt="Barış Sönmez" width={80} height={80} className="object-cover rounded-full" /></div>
      <div className="ml-2">
        <p className="text-sm">Merhaba, ben Barış Sönmez.<br />
        Antalya’da yaşayan, full stack web & mobil uygulama geliştiricisiyim.</p>
        <p className="flex flex-wrap">
          <a href="#" className="top-contact-item">&lt;github&gt;</a>
          <a href="#" className="top-contact-item">&lt;twitter&gt;</a>
          <a href="#" className="top-contact-item">&lt;linkedin&gt;</a>
          <a href="#" className="top-contact-item">&lt;instagram&gt;</a>
        </p>
      </div>
    </div>
    <div className="flex px-2 flex-row mt-2 flex-wrap w-full">
      <span className="skill-tag">php</span>
      <span className="skill-tag">javascript</span>
      <span className="skill-tag">flutter</span>
      <span className="skill-tag">dart</span>
      <span className="skill-tag">html</span>
      <span className="skill-tag">css</span>
      <span className="skill-tag">laravel</span>
      <span className="skill-tag">codeigniter</span>
      <span className="skill-tag">sql</span>
      <span className="skill-tag">vue</span>
      <span className="skill-tag">tailwind</span>
      <span className="skill-tag">bootstrap</span>
      <span className="skill-tag">aermod</span>
      <span className="skill-tag">illustrator</span>
      <span className="skill-tag">photoshop</span>
      <span className="skill-tag">fireworks</span>
      <span className="skill-tag">premiere</span>
      <span className="skill-tag">kicad</span>
      <span className="skill-tag">easyeda</span>
      <span className="skill-tag">figma</span>
      <span className="skill-tag">avr</span>
      <span className="skill-tag">surfer</span>
      <span className="skill-tag">autocad</span>
      <span className="skill-tag">blender</span>
      <span className="skill-tag">cinema4d</span>
      <span className="skill-tag">netcad</span>
      <span className="skill-tag">pwa</span>
      <span className="skill-tag">jquery</span>
    </div>
    <div className="flex flex-col px-2 mt-4">
      <h4 className="font-semibold text-lg my-3 border-b-1">barış sönmez <span className="font-normal">kimdir?</span></h4>
      <p className="indent-4 mb-3">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
      <p className="indent-4 mb-3">Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan de Finibus Bonorum et Malorum (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan Lorem ipsum dolor sit amet 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p>
    </div>
    </>
  )
};
export default Profile;