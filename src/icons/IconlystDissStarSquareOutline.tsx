import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDissStarSquareOutline = ({
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
      d="M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.353 8.26.905 1.794a.75.75 0 0 0 1.34-.676l-.983-1.948-.005-.009a1.42 1.42 0 0 0-2.513 0l-.967 1.913-2.153.308a1.393 1.393 0 0 0-.782 2.39l1.55 1.476-.243 1.388a.75.75 0 0 0 1.477.26l.255-1.448a1.39 1.39 0 0 0-.414-1.248l-1.43-1.362 1.993-.285a1.41 1.41 0 0 0 1.062-.756zm5.182 2.711a.75.75 0 0 1-.026 1.06l-1.549 1.477.368 2.089a1.406 1.406 0 0 1-1.17 1.612c-.3.047-.608-.003-.877-.143l-1.962-1.01a.75.75 0 1 1 .686-1.333l1.81.93-.342-1.943v-.002c-.082-.46.075-.928.412-1.248l.002-.001 1.587-1.513a.75.75 0 0 1 1.06.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.427 3.827a.75.75 0 0 1 0 1.06L5.135 20.175a.75.75 0 1 1-1.06-1.06l15.29-15.287a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDissStarSquareOutline;
