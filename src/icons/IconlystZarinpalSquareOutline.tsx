import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZarinpalSquareOutline = ({
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
      d="M3.74 3.897C4.726 2.841 6.128 2.25 7.783 2.25h8.435c1.659 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.947c0 1.627-.509 3.078-1.488 4.128-.984 1.057-2.387 1.648-4.046 1.648H7.782c-1.659 0-3.061-.59-4.045-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.839 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.947c0 1.317.409 2.38 1.085 3.106.67.72 1.659 1.17 2.947 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.283 0-2.272.45-2.944 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.666 8.337a.58.58 0 0 0-.82 0l-6.453 6.454a.579.579 0 1 0 .819.82l6.453-6.453a.58.58 0 0 0 0-.82m-1.88-1.06a2.08 2.08 0 0 1 2.94 0 2.08 2.08 0 0 1 0 2.94l-6.453 6.454a2.08 2.08 0 0 1-2.94-2.94M15.34 13.347c.745-.745 2.02-.217 2.02.838v1.993c0 .653-.53 1.183-1.183 1.183h-1.995c-1.053 0-1.583-1.273-.836-2.02zm.52 1.602-.912.912h.911zM8.143 8.14v.912l.911-.911zm-1.5-.317c0-.653.53-1.182 1.182-1.182H9.82c1.054 0 1.582 1.274.837 2.02L8.66 10.654c-.744.741-2.018.22-2.018-.837z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZarinpalSquareOutline;
