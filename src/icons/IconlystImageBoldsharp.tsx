import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m18.888 19.032-.146.032H5.921l-.172-.272 2.413-4.468.379.027 3.152 1.589 2.963-3.933h.362l4.051 6.795zM8.757 6.545a2.176 2.176 0 0 1 2.171 2.171c0 1.196-.974 2.17-2.171 2.17a2.173 2.173 0 0 1-2.17-2.17c0-1.198.974-2.171 2.17-2.171M2.5 22.354H22v-19.5H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageBoldsharp;
