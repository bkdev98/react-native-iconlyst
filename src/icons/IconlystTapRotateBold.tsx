import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotateBold = ({
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
      d="M21.56 13.506c-.278-2.83-3.733-3.606-6.038-4.452l1.08-4.387a1.746 1.746 0 0 0-3.385-.86l-2.612 9.96a.67.67 0 0 1-1.118.306l-1.05-1.04a2.038 2.038 0 0 0-3.245.516 1.94 1.94 0 0 0 .178 2.09c.818 1.048 2.209 2.718 3.637 3.926 2.236 1.89 6.421 2.644 8.86 1.219 2.127-1.242 3.974-4.43 3.693-7.278M6.189 10.004a.792.792 0 1 0-.44-1.522l-.484.14c.601-1.005 1.623-2.185 3.31-3.051l-.134.318a.793.793 0 0 0 1.457.617l.872-2.057c.027-.062.03-.128.04-.193q.008-.025.011-.05a.8.8 0 0 0-.022-.24c-.004-.02 0-.04-.005-.06q-.006-.009-.01-.018c-.005-.014-.003-.031-.008-.045-.02-.049-.056-.084-.084-.128-.023-.036-.042-.075-.07-.105-.03-.033-.066-.056-.1-.083-.05-.039-.097-.077-.154-.103q-.008-.007-.019-.014l-2.07-.874a.793.793 0 0 0-.615 1.459l.307.13c-1.659.84-3.03 2.054-3.96 3.527l-.045-.159a.795.795 0 0 0-.979-.547.793.793 0 0 0-.545.979l.612 2.157c.01.039.038.07.055.106q.02.046.045.09.045.074.106.134.056.059.124.106c.017.011.029.03.048.04.013.007.03.004.045.011.037.02.067.048.108.06q.12.04.243.039a.8.8 0 0 0 .305-.07z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRotateBold;