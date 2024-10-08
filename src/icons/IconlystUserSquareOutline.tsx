import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSquareOutline = ({
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
      d="M4.14 3.897C5.126 2.841 6.528 2.25 8.184 2.25h8.434c1.66 0 3.062.59 4.046 1.648.979 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.183c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.512-3.078 1.49-4.129M5.239 4.92C4.56 5.647 4.15 6.71 4.15 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.659 1.17 2.948 1.17h8.433c1.29 0 2.279-.45 2.95-1.17.676-.726 1.084-1.789 1.084-3.106V8.026c0-1.317-.408-2.38-1.084-3.106-.671-.72-1.66-1.17-2.949-1.17H8.183c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.62 13.557c.781-.262 1.788-.334 2.78-.334.998 0 2.005.075 2.786.34.395.134.786.334 1.085.648.317.332.497.757.497 1.248 0 .494-.182.92-.5 1.25-.301.313-.694.511-1.089.643-.781.262-1.787.334-2.78.334-.997 0-2.004-.074-2.785-.34-.395-.134-.786-.334-1.086-.647a1.77 1.77 0 0 1-.497-1.25c0-.493.182-.918.5-1.25.302-.312.694-.51 1.089-.642m-.008 1.683a.27.27 0 0 0-.08.21c0 .099.026.155.081.213.073.076.218.173.483.263.538.183 1.34.26 2.304.26.96 0 1.763-.075 2.303-.256.266-.09.412-.186.484-.261a.27.27 0 0 0 .081-.21.27.27 0 0 0-.082-.212c-.072-.076-.217-.174-.482-.264-.538-.183-1.34-.26-2.304-.26-.96 0-1.764.075-2.303.256-.266.09-.412.186-.485.261M12.4 7.813a1.546 1.546 0 1 0-.001 3.092 1.546 1.546 0 0 0 .002-3.092M9.355 9.359a3.046 3.046 0 1 1 6.092 0 3.046 3.046 0 0 1-6.092 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSquareOutline;
