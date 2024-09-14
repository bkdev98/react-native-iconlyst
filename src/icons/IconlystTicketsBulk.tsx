import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketsBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.82 3.504c.79.39 1.44 1.04 1.83 1.83.41.84.41 1.83.41 3.8v3.06c0 1.97 0 2.96-.41 3.79a4.03 4.03 0 0 1-1.64 1.73v.01q-.009.006-.02.01a.1.1 0 0 0-.02.01q-.037.021-.075.04-.038.018-.075.04l-.048.02c-.05.023-.098.044-.152.06-.37.16-.78.24-1.3.28-.05.01-.09.01-.13.01-.34.02-.72.03-1.17.03h-.2v-3.17a.749.749 0 1 0-1.5 0v3.18H8.97c-1.48 0-2.4 0-3.12-.17-.14-.04-.27-.08-.4-.12l-.015-.01q-.008-.003-.015-.01c-.08-.03-.16-.06-.24-.1a4.05 4.05 0 0 1-1.83-1.83c-.41-.84-.41-1.83-.41-3.8v-3.06c0-1.97 0-2.96.41-3.79.39-.8 1.04-1.45 1.83-1.84.68-.34 1.46-.4 2.8-.4l1.51-.01h5.83v3.2c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-3.2c1.46.01 2.29.06 3 .41m-3.75 9.52c.41 0 .75-.34.75-.75v-3.19a.749.749 0 1 0-1.5 0v3.19c0 .41.33.75.75.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.17 7.898h1.88a.749.749 0 1 1 0 1.5h-1.88a.749.749 0 1 1 0-1.5M6.59 12.908c0-.41.34-.75.75-.75h4.71a.749.749 0 1 1 0 1.5H7.34c-.41 0-.75-.33-.75-.75M20.01 17.727v-.01l-.014.008q-.016.006-.026.022-.037.022-.075.04t-.075.04l-.048.02c-.05.023-.098.044-.152.06-.42.14-1.03.24-1.3.28-.05.01-.09.01-.13.01-.06.11-.13.21-.2.29-.4.45-.95.77-1.54.89-.608.12-1.426-.1-2.99-.517l-.01-.003-.18-.05-1.87-.57H8.97c-1.33 0-2.49-.12-3.55-.31h-.03l.06.02c.13.04.26.08.4.12l7.01 2.18c1.51.41 2.44.66 3.23.66.22 0 .43-.02.64-.06.92-.18 1.77-.67 2.39-1.37.37-.42.62-.93.89-1.75"
    />
  </Svg>
);
export default IconlystTicketsBulk;