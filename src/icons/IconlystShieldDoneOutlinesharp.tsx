import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.487 9.795-4.959 4.961L8.576 11.8l1.062-1.06 1.891 1.895 3.897-3.9z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.633 3.354h17.236v9.8c0 3.625-2.181 6.06-4.246 7.547a16 16 0 0 1-4.049 2.087l-.075.024-.021.007-.006.002h-.003l-.218-.717-.218.718-.003-.001-.007-.002-.021-.007a7 7 0 0 1-.345-.118A15.947 15.947 0 0 1 7.878 20.7c-2.064-1.487-4.245-3.922-4.245-7.547zm8.618 18.75-.218.718.218.066.217-.066zm0-.79.082-.03a14.448 14.448 0 0 0 3.413-1.8c1.87-1.347 3.623-3.387 3.623-6.33v-8.3H5.133v8.3c0 2.943 1.753 4.983 3.622 6.33a14.5 14.5 0 0 0 3.496 1.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldDoneOutlinesharp;
