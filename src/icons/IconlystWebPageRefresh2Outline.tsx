import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh2Outline = ({
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
      d="M7.344 6.55c0 .41-.336.75-.75.75h-.056a.753.753 0 0 1-.663-1.098.75.75 0 0 1 .663-.402h.056c.414 0 .75.34.75.75M9.83 6.55c0 .41-.336.75-.75.75h-.056a.75.75 0 0 1-.563-.256.748.748 0 0 1 .563-1.244h.056c.414 0 .75.34.75.75M12.315 6.55c0 .41-.336.75-.75.75h-.055a.75.75 0 0 1-.75-.75c0-.41.335-.75.75-.75h.055c.414 0 .75.34.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.25 12.83a.746.746 0 0 1-.75-.75v-1.84H4v5.73c0 1.32.409 2.38 1.084 3.11.67.72 1.66 1.17 2.948 1.17h1.75c.415 0 .75.34.75.75s-.335.75-.75.75h-1.75c-1.659 0-3.062-.59-4.045-1.65-.979-1.05-1.487-2.5-1.487-4.13V8.03c0-1.63.511-3.08 1.49-4.13.985-1.06 2.386-1.65 4.042-1.65h8.436c1.659 0 3.061.59 4.045 1.65C21.492 4.95 22 6.4 22 8.03v4.05c0 .42-.336.75-.75.75M4 8.74h16.5v-.71c0-1.32-.409-2.38-1.084-3.11-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17C4.41 5.65 4 6.71 4 8.03z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.23 19.25c0 .41-.335.75-.75.75.256.123.539.2.838.2.852 0 1.598-.46 1.995-1.15a.744.744 0 0 1 1.025-.27c.358.21.481.67.274 1.02a3.8 3.8 0 0 1-3.294 1.9c-.796 0-1.461-.287-1.973-.63a.753.753 0 0 1-.746.68.753.753 0 0 1-.75-.75v-1.75c0-.41.336-.75.75-.75h1.881c.415 0 .75.34.75.75M20.376 13.9c.415 0 .75.33.75.75v1.852a.74.74 0 0 1-.364.678c-.16.099-.341.13-.512.1h-1.755a.753.753 0 0 1-.75-.75c0-.36.259-.666.603-.735a2.8 2.8 0 0 0-1.03-.195c-.862 0-1.605.46-2.003 1.15a.747.747 0 0 1-1.024.28.75.75 0 0 1-.278-1.02 3.79 3.79 0 0 1 3.305-1.91 4.2 4.2 0 0 1 2.308.675v-.125c0-.42.336-.75.75-.75"
    />
  </Svg>
);
export default IconlystWebPageRefresh2Outline;
