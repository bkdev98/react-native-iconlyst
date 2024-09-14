import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWiperWashLight = ({
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
      d="m7.755 11.999 3.037 8.81"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.149 11.726-2.614 7.227a.935.935 0 0 1-1.222.441c-1.286-.59-3.675-.876-5.063-.877-1.388 0-3.776.287-5.063.877a.936.936 0 0 1-1.222-.441l-2.613-7.227c-.23-.458-.06-1.03.396-1.263a18.6 18.6 0 0 1 8.501-2.028c2.92 0 5.84.663 8.503 2.028.456.234.625.805.397 1.263"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.892 6.078q0-.25-.045-.497M17.479 3.957a3 3 0 0 0-.394-.308M14.273 3.19a3 3 0 0 0-.526.197M6.699 3.65q-.208.135-.394.307M9.51 3.19q.272.072.526.197M11.892 14.08v-1M11.892 9.08v1"
    />
  </Svg>
);
export default IconlystWiperWashLight;
