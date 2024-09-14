import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCheckOutline = ({
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
      d="m5.36 10.246-.727 5.636-.002.016c-.294 1.964.107 2.97.686 3.512.617.58 1.64.837 3.022.837h7.816c1.322 0 2.347-.348 2.983-.993.616-.625 1-1.665.757-3.361l-.002-.01-.724-5.623C18.778 8.53 17.783 8 17.03 8h-9.53c-.413 0-.86.14-1.241.474-.377.328-.731.88-.899 1.772M5.27 7.344A3.38 3.38 0 0 1 7.498 6.5h9.53c1.608 0 3.108 1.177 3.613 3.469l.011.065.729 5.651c.286 2.004-.136 3.568-1.175 4.622-1.02 1.035-2.502 1.44-4.05 1.44H8.338c-1.488 0-3.003-.26-4.05-1.243-1.083-1.018-1.471-2.616-1.142-4.821l.727-5.649.007-.04c.216-1.18.716-2.062 1.39-2.65"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.426 7.025A4.795 4.795 0 0 1 12.24 2.25a4.795 4.795 0 0 1 4.794 4.795.75.75 0 0 1-1.5 0A3.295 3.295 0 0 0 12.24 3.75h-.004a3.295 3.295 0 0 0-3.31 3.28v.015a.75.75 0 0 1-1.5 0zM15.835 11.376a.75.75 0 0 1 0 1.06l-4.072 4.073a.75.75 0 0 1-1.06 0l-2.038-2.036a.75.75 0 1 1 1.06-1.06l1.507 1.505 3.542-3.542a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagCheckOutline;
