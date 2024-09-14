import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTagBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.56 14.651c.684-.69 1.09-1.522 1.18-2.498.072-.779.029-3.675.028-4.342-.003-1.218-.924-2.311-2.12-2.516-.244-.043-3.12-.037-4.31-.036-1.177 0-2.18.424-3.01 1.253a3385 3385 0 0 0-5.29 5.289c-1.04 1.043-1.055 2.645-.018 3.692a680 680 0 0 0 4.513 4.511c1.045 1.037 2.647 1.024 3.692-.018v-.001q1.53-1.523 3.056-3.05M8.32 13.482l2.223 2.224"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.023 8.452a3.05 3.05 0 0 1-.677-3.296q.22-.574.677-1.032a3.07 3.07 0 0 1 4.336 0 3.073 3.073 0 0 1 0 4.328 3.13 3.13 0 0 1-1.51.824"
    />
  </Svg>
);
export default IconlystTagBroken;
