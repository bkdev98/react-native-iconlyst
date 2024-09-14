import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.87 8.54c-.01.36-.02.77-.02 1.24-.01.44-.02.93-.02 1.48-.01.43-.01.9-.01 1.41 0 5.33-5.26 7.87-7.07 8.59-.37.15-.59.22-.6.22-.05.01-.1.02-.15.02s-.1-.01-.15-.02c-.01 0-.23-.07-.6-.22-1.81-.72-7.07-3.26-7.07-8.59 0-.51 0-.98-.01-1.41 0-.55-.01-1.04-.02-1.47v-.01c0-.47-.01-.88-.02-1.25-.04-2.4-.05-2.83.51-3.4.6-.59 4.75-2.08 6.61-2.51.33-.08.59-.12.75-.12.15 0 .41.04.75.12 1.86.44 6.01 1.92 6.61 2.51.56.57.55 1 .51 3.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.85 9.78c-.01.44-.02.93-.02 1.48-.03.01-.06.01-.09.01h-6.99v9.99c-.37.15-.59.22-.6.22-.05.01-.1.02-.15.02s-.1-.01-.15-.02c-.01 0-.23-.07-.6-.22v-9.99H4.26c-.03 0-.06 0-.09-.01 0-.55-.01-1.04-.02-1.47v-.01c.04-.01.07-.01.11-.01h6.99V2.62c.33-.08.59-.12.75-.12.15 0 .41.04.75.12v7.15h6.99c.04 0 .07 0 .11.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldBulk;
