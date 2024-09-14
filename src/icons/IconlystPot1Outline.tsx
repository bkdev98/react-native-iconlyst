import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot1Outline = ({
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
      d="M11.344 3.94h-.525a.753.753 0 0 1-.75-.75c0-.42.336-.75.75-.75h2.37c.415 0 .75.33.75.75 0 .41-.335.75-.75.75h-.345v.821c1.795.135 3.448.707 4.716 1.729a6.2 6.2 0 0 1 2.16 3.31H21c.414 0 .75.34.75.75s-.336.75-.75.75h-1.057q.007.168.007.34l.009 4.65c0 1.33-.417 2.53-1.23 3.41-.819.87-1.983 1.36-3.348 1.36H8.628c-1.365 0-2.529-.49-3.348-1.36-.813-.88-1.23-2.08-1.23-3.41v-4.65q0-.172.007-.34H3a.753.753 0 0 1-.75-.75c0-.41.336-.75.75-.75h1.28a6.2 6.2 0 0 1 2.159-3.31c1.312-1.057 3.037-1.633 4.905-1.741zM5.559 11.3a7 7 0 0 0-.01.34v4.65c0 1.02.318 1.83.829 2.38.505.55 1.255.89 2.25.89h6.753c.995 0 1.745-.34 2.25-.89.511-.55.828-1.36.828-2.38l-.009-4.64v-.01q0-.173-.009-.34zm12.593-1.5a4.7 4.7 0 0 0-1.53-2.14C15.481 6.74 13.86 6.23 12 6.23s-3.482.51-4.623 1.43a4.72 4.72 0 0 0-1.53 2.14z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPot1Outline;
