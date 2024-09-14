import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.243 21.312h3.648c3.356 0 5.333-1.978 5.333-5.333l.026-4.655c0-3.423-1.241-5.136-4.605-5.136h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.711-.856H7.838c-3.356 0-4.588 1.977-4.588 5.327v7.314c0 3.355 1.981 5.333 5.345 5.333h.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.664 17.027h-2.826a1.403 1.403 0 0 1-1.402-1.403v-1.586c0-.775.627-1.403 1.402-1.403h2.826c.774 0 1.402.628 1.402 1.403v1.586c0 .775-.629 1.403-1.402 1.403"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.937 12.665v-1.044a1.686 1.686 0 0 0-3.373-.007v1.051"
    />
  </Svg>
);
export default IconlystFolderLockBroken;
