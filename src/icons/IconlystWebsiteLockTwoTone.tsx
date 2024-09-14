import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteLockTwoTone = ({
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
      d="M21.192 12.995V8.14c0-2.845-1.771-4.854-4.618-4.854H8.427c-2.838 0-4.618 2.01-4.618 4.854v7.675c0 2.845 1.772 4.855 4.618 4.855h1.69M9.717 6.64h-.01m-2.476 0h-.01zm4.972 0h-.01z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.192 9.555H3.809"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.312 21.283h-3.25a1.614 1.614 0 0 1-1.615-1.614v-1.826c0-.892.722-1.613 1.614-1.613h3.251c.891 0 1.614.721 1.614 1.613v1.826c0 .89-.723 1.613-1.614 1.613"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.627 16.263V15.06a1.941 1.941 0 0 0-3.88-.007v1.209"
    />
  </Svg>
);
export default IconlystWebsiteLockTwoTone;
