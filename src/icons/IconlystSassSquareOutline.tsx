import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSassSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.733 5.995c.76.284 1.372.835 1.548 1.59.158.676.013 1.386-.553 1.978-.527.552-1.368.95-2.508 1.214a.75.75 0 0 1-.339-1.462c1.014-.235 1.526-.54 1.762-.788.198-.207.226-.392.177-.6-.03-.13-.172-.363-.612-.527-.432-.161-1.099-.227-1.984-.022-1.685.391-2.222 1.63-2.05 2.375.138.592.56 1.058 1.206 1.642l.228.204c.438.389.955.848 1.356 1.41a8 8 0 0 1 1.578-.133c.765 0 1.394.132 1.886.406.51.285.83.698.99 1.16.3.86.02 1.777-.191 2.263a.75.75 0 0 1-1.377-.596c.168-.388.26-.861.152-1.174a.6.6 0 0 0-.304-.343c-.198-.11-.55-.216-1.156-.216-.368 0-.647.015-.924.049.123.488.149.987.057 1.465a2.74 2.74 0 0 1-1.44 1.937c-.908.484-2.101.587-2.927.13-.452-.252-.817-.696-.854-1.316-.034-.573.224-1.148.646-1.695.615-.797 1.42-1.251 2.247-1.537a15 15 0 0 0-.726-.68l-.247-.221c-.64-.58-1.407-1.323-1.661-2.416-.403-1.74.882-3.644 3.172-4.175 1.103-.256 2.08-.209 2.848.078m-2.585 8.733c-.786.226-1.416.559-1.86 1.135-.315.407-.34.629-.336.69v.003c0 .016 0 .042.084.089.114.063.328.118.622.102.286-.016.596-.097.871-.244.392-.209.601-.522.673-.895a1.94 1.94 0 0 0-.054-.88"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSassSquareOutline;
