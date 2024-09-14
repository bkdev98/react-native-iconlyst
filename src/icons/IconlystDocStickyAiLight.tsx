import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocStickyAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.972 13.571v2.857c0 2.623 1.642 4.476 4.259 4.476h5.63c.586 0 1.148-.24 1.554-.663l3.985-4.15c.384-.402.6-.936.6-1.492V9.351c0-2.622-1.633-4.475-4.26-4.475h-1.879"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.367 20.84V17.8a2.69 2.69 0 0 1 2.684-2.692h2.88M16.22 10.375h-5.728m3.558 4.25h-3.56M5.459 5.329l-.096.259A3.57 3.57 0 0 1 3.26 7.696L3 7.792l.259.095a3.57 3.57 0 0 1 2.104 2.108l.096.26.096-.26a3.57 3.57 0 0 1 2.104-2.108l.26-.095-.26-.096a3.57 3.57 0 0 1-2.104-2.108zM10.49 3.096c-.162.535-.58.954-1.115 1.117.534.162.953.581 1.115 1.116.163-.535.58-.954 1.115-1.116a1.68 1.68 0 0 1-1.115-1.117"
    />
  </Svg>
);
export default IconlystDocStickyAiLight;
