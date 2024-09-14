import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotateBulk = ({
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
      d="M22.06 13.506c-.278-2.83-3.733-3.606-6.038-4.451l1.08-4.388a1.746 1.746 0 0 0-3.385-.86l-2.612 9.96a.67.67 0 0 1-1.117.306l-1.05-1.04a2.038 2.038 0 0 0-3.246.516 1.94 1.94 0 0 0 .178 2.09c.818 1.049 2.209 2.719 3.637 3.926 2.236 1.89 6.422 2.644 8.86 1.22 2.127-1.243 3.974-4.43 3.694-7.279"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.689 10.006a.792.792 0 0 0-.44-1.522l-.484.14c.6-1.005 1.623-2.185 3.31-3.051l-.135.318a.793.793 0 0 0 1.458.617l.872-2.057c.026-.062.03-.128.04-.193.003-.017.01-.033.01-.051a.8.8 0 0 0-.021-.239c-.005-.02 0-.04-.006-.06q-.004-.009-.01-.018c-.005-.014-.002-.031-.008-.045-.02-.049-.056-.085-.083-.128-.023-.036-.042-.075-.07-.105-.03-.033-.066-.056-.101-.083-.05-.039-.096-.077-.153-.103q-.01-.007-.02-.014l-2.07-.874a.793.793 0 0 0-.615 1.459l.308.13C6.812 4.967 5.44 6.18 4.51 7.654l-.044-.159a.795.795 0 0 0-.979-.547.793.793 0 0 0-.546.979l.613 2.157c.01.039.038.07.054.106q.02.047.046.09.045.074.105.134.057.059.125.106c.017.011.028.03.047.04.014.007.031.004.046.011.037.02.066.048.108.06q.121.04.242.038a.8.8 0 0 0 .305-.07z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRotateBulk;
