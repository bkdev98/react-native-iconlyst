import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave2Bulk = ({
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
      d="m20.687 8.059-4.475-4.662-.001-.001a2.94 2.94 0 0 0-2.106-.896H8.807v5.15a.75.75 0 0 1-1.5 0V2.543C4.419 2.76 2.5 4.894 2.5 8.026v7.947c0 3.133 1.919 5.267 4.807 5.484v-3.781a2.586 2.586 0 0 1 2.583-2.584h4.222a2.586 2.586 0 0 1 2.583 2.584v3.781c2.887-.219 4.805-2.352 4.805-5.484V10.08c0-.757-.289-1.475-.813-2.021"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.112 16.592H9.89c-.597 0-1.083.486-1.083 1.084V21.5h6.388v-3.824c0-.598-.486-1.084-1.083-1.084"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSave2Bulk;
