import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTradeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.808 14.653-1.64 1.587c-.03.03-.07.044-.104.067-.044.03-.084.066-.134.087a.8.8 0 0 1-.284.057.8.8 0 0 1-.284-.057c-.055-.022-.099-.061-.146-.095-.03-.021-.064-.033-.092-.06l-.008-.007v-.001l-1.63-1.578a.75.75 0 1 1 1.043-1.078l.367.356v-3.502a.75.75 0 0 1 1.5 0v3.503l.37-.357a.751.751 0 0 1 1.042 1.078m-5.73-2.57-.37-.356v3.502a.75.75 0 0 1-1.5 0v-3.5l-.367.355a.746.746 0 0 1-1.06-.017.75.75 0 0 1 .017-1.061l1.63-1.576.002-.004.008-.007c.023-.023.053-.032.08-.051.05-.038.098-.08.158-.103a.8.8 0 0 1 .277-.056l.005-.001a.8.8 0 0 1 .286.058c.045.019.08.052.121.078s.081.042.116.076l1.64 1.587a.75.75 0 0 1-1.044 1.077m7.943-5.995a9.43 9.43 0 0 0-6.719-2.79 9.43 9.43 0 0 0-6.718 2.79c-2.805 2.817-3.57 7.138-1.913 10.73.197.492.317.81.317 1.092 0 .334-.142.749-.279 1.15-.264.78-.565 1.662.078 2.308.647.649 1.531.345 2.311.076.397-.137.808-.28 1.134-.281.292 0 .657.147 1.08.318a9.518 9.518 0 0 0 10.71-1.916c3.7-3.715 3.7-9.76 0-13.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesTradeBold;
