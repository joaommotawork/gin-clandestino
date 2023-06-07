import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen gap-10 px-10 py-10 text-white bg-black lg:flex-row lg:px-52 lg:gap-0'>
			<div className='flex flex-col flex-1 gap-5'>
				<Image
					className='relative self-center lg:self-start'
					src='/logo-clandestino-secretly-distilled.svg'
					alt='Gin Clandestino - Secretly Distilled Logo'
					width={180}
					height={40}
					priority
				/>
				<div className='flex flex-col text-lg lg:text-2xl'>
					<p>
						Clandestino Secretly Distilled® gin was kept secret for
						years.
					</p>
					<p>
						{`Because we believe that some secrets aren't meant to
						stay secret forever, we are now sharing our best-kept
						one.`}
					</p>
					<p>
						A meticulous blend of 3 distillations from different
						botanical groups & Green Tree Python shed skin from the
						Biak and Kofiau islands.
					</p>
					<p>
						Each bottle is part of a special batch that marks the
						revealing of our Clandestino gin.
					</p>
				</div>
				<p className='text-lg lg:text-2xl'>
					Thank you for being part of our history.
				</p>
				<hr className='h-[3px] w-2/3 lg:w-2/5 bg-[#3358A0] border-0'></hr>
				<div className='flex items-center gap-4'>
					<a
						href='https://www.instagram.com/ginclandestino/'
						target='_blank'
						className='cursor-pointer'>
						<FaInstagram className='text-2xl' />
					</a>
					<div className='text-base'>
						<p>
							Follow on Instagram{' '}
							<a
								href='https://www.instagram.com/ginclandestino/'
								target='_blank'
								className='cursor-pointer'>
								@ginclandestino
							</a>
						</p>
						<a href='mailto: abc@example.com' target='_blank'>
							drink@clandestinogin.com
						</a>
					</div>
				</div>
			</div>
			<div className='flex-1'>
				<Image
					className='relative'
					src='/clandestino-gin.jpg'
					alt='Gin Clandestino - Secretly Distilled Bottle'
					width={800}
					height={1200}
					priority
				/>
			</div>
		</main>
	);
}
