import { Release } from '@api'
import { Menu, MenuLink } from '@ui'
import { sortBy } from '@utils'
import Link from 'next/link'
import React from 'react'

export interface SidebarProps {
    className?: string
    releases?: Release[]
}

export const Sidebar: React.FC<SidebarProps> = ({
    className = '',
    releases = [],
}) => {
    const [release] = sortBy(releases, 'date', 'desc')
    const title = `News: ${release.title}`
    const href = `/blog/${release.slug}`
    return (
        <div className="space-y-5">
            {release && (
                <span className="underline text-xl text-gray-800">
                    <Link href={href}>{title}</Link>
                </span>
            )}
            <Menu title="Official channels">
                <MenuLink href="/">Source code & Issues tracker</MenuLink>
                <MenuLink href="/">#elixir-lang on freenode IRC</MenuLink>
                <MenuLink href="/">@elixirlang on Twitter</MenuLink>
            </Menu>
            <Menu title="Join the community">
                <MenuLink href="/">Hex.pm package manager</MenuLink>
                <MenuLink href="/">Geis Forum</MenuLink>
                <MenuLink href="/">Geis on Slack</MenuLink>
            </Menu>
        </div>
    )
}
