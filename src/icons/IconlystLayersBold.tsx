import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLayersBold = ({
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
      d="m19.249 11.368-1.064-.597-3.919 2.212a4.3 4.3 0 0 1-4.175 0l-.422-.239-3.496-1.973-1.064.597a1.59 1.59 0 0 0-.817 1.404c0 .596.303 1.12.817 1.413l1 .56 3.982 2.238a4.297 4.297 0 0 0 4.175 0l3.983-2.238 1-.569c.514-.285.826-.808.826-1.404 0-.588-.312-1.12-.826-1.404"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m5.109 9.348 1.064.596 3.496 1.973.422.239a4.296 4.296 0 0 0 4.175 0l3.919-2.212 1.064-.596c.514-.284.826-.816.826-1.404 0-.587-.312-1.12-.826-1.404l-4.983-2.808a4.33 4.33 0 0 0-4.175 0L5.109 6.54a1.59 1.59 0 0 0-.817 1.404c0 .588.303 1.12.817 1.404M19.249 16l-1-.56-3.983 2.239a4.3 4.3 0 0 1-4.175 0l-3.982-2.24-1 .56a1.6 1.6 0 0 0-.817 1.405c0 .596.303 1.119.817 1.413l4.982 2.799a4.307 4.307 0 0 0 4.175 0l4.983-2.8a1.61 1.61 0 0 0 .826-1.412c0-.587-.312-1.111-.826-1.404"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLayersBold;
