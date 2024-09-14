import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseOutline = ({
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
      d="M7.682 4.75c-.776 0-1.407.63-1.407 1.407v11.686a1.407 1.407 0 0 0 2.814 0V6.157c0-.777-.63-1.407-1.407-1.407M4.775 6.157a2.907 2.907 0 0 1 5.814 0v11.686a2.907 2.907 0 0 1-5.814 0zM16.817 4.75c-.777 0-1.407.63-1.407 1.407v11.686a1.407 1.407 0 0 0 2.814 0V6.157c0-.777-.63-1.407-1.407-1.407M13.91 6.157a2.907 2.907 0 0 1 5.814 0v11.686a2.907 2.907 0 0 1-5.814 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPauseOutline;
