import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap3Bold = ({
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
      d="M7.12 6.78c.12-.05.25-.08.38-.08s.26.03.38.08a1 1 0 0 0-.76 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.71 11.5c-.39-.39-1.03-.39-1.42 0l-2.79 2.79V3.2c0-.55-.45-1-1-1s-1 .45-1 1v11.09L8.25 7.04 8.21 7c-.05-.05-.1-.09-.15-.13a.8.8 0 0 0-.18-.09 1 1 0 0 0-.76 0q-.09.03-.18.09c-.05.04-.1.08-.15.13l-.04.04-4.46 4.46a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0l2.79-2.79V21.2c0 .56.45 1 1 1s1-.44 1-1V10.12l7.29 7.29c.09.09.2.16.32.21.05.02.09.04.14.04.08.03.16.04.25.04s.17-.01.25-.04c.05 0 .09-.02.14-.04.12-.05.23-.12.32-.21l4.5-4.5a.996.996 0 0 0 0-1.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwap3Bold;
