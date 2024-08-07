import { prisma } from '@/prisma/prisma-client'
import {
	Container,
	FeedUserMenu,
	MainBannerForm,
	NewPostButton,
	SideCustomMenuForm,
	SideFooter,
	SocialMenu,
	SortFeedButtons,
	Title,
} from '@/shared/components/'

export default async function Home() {
	const menu = await prisma.sideCustomMenu.findMany()
	const banner = await prisma.stormicMedia.findFirst({
		where: {
			name: String('Stormic'),
		},
	})

	return (
		<>
			<Container className='mt-4'>
				<div className='flex gap-4'>
					{/* Левая часть */}
					<div className='w-[300px]'>
						<FeedUserMenu />
						<SocialMenu className='my-2' />
						<NewPostButton className='my-4' />
						<SideCustomMenuForm className='mt-4' data={menu} />
						<SideFooter className='my-4' />
					</div>

					{/* Центральная часть */}
					<div className='flex-1'>
						<MainBannerForm data={banner} />
						<SortFeedButtons className='mt-[7px]' />
					</div>

					{/* Правая часть */}
					<div className='w-[300px] bg-red-800'>
						<Title
							text='Сейчас обсуждают'
							size='sm'
							className='font-extrabold'
						/>
						<p>Комментарии</p>
					</div>
				</div>
			</Container>
		</>
	)
}
