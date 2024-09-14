import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountEmailOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.896 11.918a.75.75 0 0 1 1.036-.227l5.451 3.49c.376.24.859.24 1.235 0l5.451-3.49a.75.75 0 0 1 .81 1.263l-5.452 3.49a2.64 2.64 0 0 1-2.852 0l-5.452-3.49a.75.75 0 0 1-.227-1.036"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.828 4.424c-.893 0-1.617.724-1.617 1.617v6.59a.75.75 0 0 1-1.5 0V6.04a3.117 3.117 0 0 1 3.117-3.117h6.337a3.12 3.12 0 0 1 3.117 3.103v.004l.01 6.598a.75.75 0 0 1-1.5.002l-.01-6.594v-.001a1.62 1.62 0 0 0-1.617-1.612z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.196 5.664a.75.75 0 0 1-.568.896c-1.7.381-2.878 1.987-2.878 4.056v6.048c0 2.382 1.546 4.15 3.724 4.143h9.043c2.18.008 3.733-1.763 3.733-4.143v-6.048c0-2.066-1.183-3.674-2.895-4.056a.75.75 0 1 1 .326-1.464c2.528.564 4.069 2.893 4.069 5.52v6.048c0 3.032-2.06 5.653-5.237 5.643l.002-.75v.75H7.478h.001l-.002-.75v.75c-3.178.01-5.227-2.613-5.227-5.643v-6.048c0-2.624 1.53-4.955 4.05-5.52a.75.75 0 0 1 .896.568"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.57 6.608a.75.75 0 0 1 0 1.061l-3.922 3.922a.75.75 0 1 1-1.061-1.06l3.922-3.923a.75.75 0 0 1 1.061 0M13.505 10.517a.75.75 0 0 1 1.06 0l.007.006a.75.75 0 0 1-1.06 1.06l-.007-.006a.75.75 0 0 1 0-1.06M9.361 7.139a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 0 1.5h-.006a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountEmailOutline;
