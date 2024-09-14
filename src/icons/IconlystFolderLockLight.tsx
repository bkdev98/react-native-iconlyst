import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderLockLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.641 21.27c3.356 0 5.333-1.977 5.333-5.332L21 11.283c0-3.423-1.241-5.136-4.605-5.136h-2.653a2.15 2.15 0 0 1-1.712-.856l-.856-1.138a2.14 2.14 0 0 0-1.711-.856H7.588C4.232 3.297 3 5.274 3 8.624v7.314c0 3.355 1.981 5.333 5.345 5.333z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.414 16.986h-2.826a1.403 1.403 0 0 1-1.402-1.403v-1.586c0-.775.628-1.403 1.402-1.403h2.826c.774 0 1.402.628 1.402 1.403v1.586c0 .775-.629 1.403-1.402 1.403"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.687 12.624V11.58a1.686 1.686 0 0 0-3.373-.007v1.051"
    />
  </Svg>
);
export default IconlystFolderLockLight;
