import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorSquareBold = ({
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
      d="M12.756 11.999a.75.75 0 0 1-1.5 0V8.107a.75.75 0 0 1 1.5 0zm0 3.742a.75.75 0 0 1-1.5 0c0-.414.336-.774.75-.774s.75.312.75.726zM16.218 2.5H7.784C4.624 2.5 2.5 4.721 2.5 8.026v7.949c0 3.304 2.123 5.525 5.283 5.525h8.435c3.159 0 5.282-2.221 5.282-5.525V8.026c0-3.305-2.123-5.526-5.282-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorSquareBold;
