import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlanketTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.763 9.158a2.267 2.267 0 0 0-2.267 2.268v1.147a2.267 2.267 0 0 0 2.267 2.268h13.465a2.27 2.27 0 0 0 2.268-2.268v-1.147a2.27 2.27 0 0 0-2.268-2.268h-2.272c-.627 0-1.22.282-1.619.768L13.57 12.09a1.094 1.094 0 0 1-1.693 0L10.11 9.926a2.09 2.09 0 0 0-1.619-.768z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.228 3.476H5.763a2.267 2.267 0 0 0-2.267 2.268V6.89a2.27 2.27 0 0 0 2.267 2.268h13.465a2.27 2.27 0 0 0 2.268-2.268V5.744a2.27 2.27 0 0 0-2.268-2.268M19.228 20.524H5.763a2.267 2.267 0 0 1-2.267-2.268v-1.147a2.27 2.27 0 0 1 2.267-2.268h13.465a2.27 2.27 0 0 1 2.268 2.268v1.147a2.27 2.27 0 0 1-2.268 2.268"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlanketTwoTone;
