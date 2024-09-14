import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.578 10.14c.825 1.154 1.329 2.508 2.146 3.667.372.527.861 1.103 1.5 1.303.743.232 1.368-.26 1.602-.948.293-.86.173-1.85-.045-2.713-.29-1.142-1.007-2.492-2.302-2.607-.786-.07-1.427.476-1.875 1.063l-.181.236c-.826 1.153-1.33 2.507-2.147 3.666-.372.527-.861 1.103-1.499 1.303-.744.232-1.37-.26-1.603-.948-.293-.86-.174-1.85.045-2.713.29-1.142 1.007-2.492 2.302-2.607.785-.07 1.427.476 1.875 1.063z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMetaSquareLight;
