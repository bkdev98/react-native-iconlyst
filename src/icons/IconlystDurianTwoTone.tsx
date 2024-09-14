import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDurianTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.632 20.017-2.544.64-.8-1.67-1.57-.4-.4-2.137-1.102-1.102.6-2.036-.6-1.77 1.502-1.468V8.138l1.903-.601.935-1.369 2.127.234 2.127-.234.934 1.369"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.244 3.98c.247.332.543 1.08.412 2.372M9.052 16.469l-.967-.668.495-1.362-.832-.848.832-1.104-.495-1.053.967-.796M13.585 17.535l-1.697.055-1.402 2.74 2.324.67 1.326-1.123 1.44.149 1.209-1.29 1.4-.215.299-1.722 1.234-.932-.714-1.779.78-1.35-1.411-1.374-.261-1.423-1.55-1.682-1.474 2.8.894 1.585-1.26.825.54 1.833-1.61.354zM7.676 3.972c.88.046 3.138-.083 5.137-.972"
    />
  </Svg>
);
export default IconlystDurianTwoTone;
