import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  BoltIcon,
  BriefcaseIcon,
  NetworkIcon,
  PowerIcon,
  SchoolIcon,
  ShieldCheckIcon,
  WifiIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={'#'} className="flex items-center gap-2">
            <NetworkIcon />
            <span className="text-lg font-semibold">
              Nirwana Akses Teknologi
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href={'#'} className="hover:underline">
              Tentang Kami
            </Link>
            <Link href={'#'} className="hover:underline">
              Layanan
            </Link>
            <Link href={'#'} className="hover:underline">
              Kelebihan
            </Link>
            <Link href={'#'} className="hover:underline">
              Testimoni
            </Link>
            <Link href={'#'} className="hover:underline">
              Kontak
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="bg-primary py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                  Solusi Internet Terbaik untuk Bisnis Anda
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground">
                  Kami menyediakan layanan internet berkualitas tinggi untuk
                  memenuhi kebutuhan Anda. Dengan teknologi terkini dan dukungan
                  tim ahli, kami siap membantu Anda terhubung dengan dunia.
                </p>
                <div className="py-4">
                  <Button variant={'outline'}>Hubungi Kami</Button>
                </div>
              </div>
              <div>
                <Image
                  alt="Hero Image"
                  src={'/undraw_connected_world.svg'}
                  width={600}
                  height={400}
                  style={{ aspectRatio: '600/400' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tentang-kami" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Tentang Kami
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 md:mt-6 lg:mt-8">
                  Nirwana Akses Teknologi adalah penyedia layanan internet (ISP)
                  terkemuka yang berkomitmen untuk menghubungkan Indonesia
                  dengan dunia digital. Didirikan pada tahun 2014, kami telah
                  tumbuh dari start-up lokal menjadi salah satu ISP terpercaya
                  di negeri ini.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mt-4">
                  Dengan pengalaman lebih dari 10 tahun di industri ini, kami
                  telah membangun infrastruktur yang kuat dan tim ahli yang
                  berdedikasi untuk memastikan kepuasan pelanggan. Kami selalu
                  berusaha untuk meningkatkan layanan kami dan menjadi mitra
                  terpercaya bagi bisnis-bisnis yang membutuhkan koneksi
                  internet yang cepat dan andal.
                </p>
              </div>
              <div className="hidden md:block">
                <Image
                  alt="About Image"
                  src="/undraw_typewriter.svg"
                  width={600}
                  height={400}
                  style={{ aspectRatio: '600/400' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="layanan"
          className="bg-primary-foreground py-12 md:py-20 lg:py-28"
        >
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Layanan Kami
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Kami menawarkan berbagai layanan internet yang sesuai dengan
                kebutuhan bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="space-y-2 py-6">
                  <WifiIcon className="text-primary h-8 w-8" />
                  <h3 className="text-xl font-semibold">Internet Rumah</h3>
                  <p className="text-muted-foreground">
                    Nikmati kecepatan internet yang stabil dan handal untuk
                    kebutuhan rumah Anda.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2 py-6">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Internet Bisnis</h3>
                  <p className="text-muted-foreground">
                    Tingkatkan produktivitas bisnis Anda dengan layanan internet
                    yang andal dan cepat.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2 py-6">
                  <SchoolIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Internet Sekolah</h3>
                  <p className="text-muted-foreground">
                    Dapatkan akses internet di area sekolah dengan layanan
                    internet dari kami.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="kelebihan" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Kelebihan Kami
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Kami menawarkan berbagai kelebihan yang membuat layanan kami
                unggul.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="space-y-2 py-6">
                  <BoltIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Kecepatan Tinggi</h3>
                  <p className="text-muted-foreground">
                    Nikmati kecepatan internet yang stabil dan cepat untuk
                    memenuhi kebutuhan Anda.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2 py-6">
                  <ShieldCheckIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Keamanan Terjamin</h3>
                  <p className="text-muted-foreground">
                    Kami menjamin keamanan data Anda dengan sistem keamanan
                    canggih.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2 py-6">
                  <PowerIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Dukungan 24/7</h3>
                  <p className="text-muted-foreground">
                    Tim dukungan kami siap membantu Anda kapan pun Anda
                    membutuhkan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimoni"
          className="bg-primary-foreground py-12 md:py-20 lg:py-28"
        >
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Apa Kata Mereka?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Dengarkan cerita dari pelanggan kami tentang pengalaman mereka
                menggunakan layanan kami.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="space-y-4 py-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.svg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Joko Darmawan</h3>
                      <p className="text-muted-foreground">CEO, PT Maju Jaya</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Layanan internet dari Nirwana Akses Teknologi sangat
                    memuaskan. Kecepatan dan keandalan yang ditawarkan sangat
                    membantu produktivitas bisnis kami."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 py-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.svg" alt="Avatar" />
                      <AvatarFallback>SH</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Siti Hartati</h3>
                      <p className="text-muted-foreground">
                        Pemilik, Toko Bunga Indah
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Kami sangat terbantu dengan layanan internet dari Nirwana
                    Akses Teknologi. Tim dukungan mereka juga sangat responsif
                    dan membantu kami dengan cepat."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4 py-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.svg" alt="Avatar" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Andi Rahmawan</h3>
                      <p className="text-muted-foreground">
                        Manajer IT, PT Sejahtera Abadi
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Kami sangat puas dengan layanan internet dari Nirwana Akses
                    Teknologi. Kecepatan dan keandalan yang ditawarkan sangat
                    membantu kelancaran operasional bisnis kami."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="kontak" className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Hubungi Kami
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Jika Anda memiliki pertanyaan atau ingin mendapatkan informasi
                lebih lanjut, jangan ragu untuk menghubungi kami.
              </p>
            </div>
            <div className="max-w-md mx-auto mt-12">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full"
                />
                <Textarea placeholder="Pesan" rows={4} className="w-full" />
                <Button type="submit" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-sm">
            &copy; 2024 Nirwana Akses Teknologi. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
