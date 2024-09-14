import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAugurOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.498 12.103a.75.75 0 0 1 .335 1.006l-.461.923 2.879 1.727 2.878-1.727-.462-.923a.75.75 0 1 1 1.342-.671l.772 1.544a.75.75 0 0 1-.285.979l-3.86 2.315a.75.75 0 0 1-.771 0l-3.86-2.315a.75.75 0 0 1-.285-.979l.771-1.544a.75.75 0 0 1 1.007-.335M12.256 6.615a.75.75 0 0 1 .643.365l1.97 3.297a.75.75 0 1 1-1.287.77l-1.328-2.223-1.336 2.224a.75.75 0 1 1-1.285-.773l1.98-3.296a.75.75 0 0 1 .643-.364"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAugurOutline;
