import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetouchMagicWandBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.434 9.65a.3.3 0 0 0-.424 0l-5.736 5.736a2.94 2.94 0 0 0-.867 2.093c0 .79.309 1.533.868 2.093l1.258 1.252a2.95 2.95 0 0 0 2.093.864c.758 0 1.517-.288 2.094-.864l5.732-5.732a.3.3 0 0 0 0-.425zM18.945 8.411 17.686 7.16a2.964 2.964 0 0 0-4.185 0l-1.006 1.006a.3.3 0 0 0 0 .424l5.017 5.018a.3.3 0 0 0 .425 0l1.008-1.01a2.963 2.963 0 0 0 0-4.186M9.656 4.442a.75.75 0 0 0 .75-.75v-.056c0-.414-.336-.722-.75-.722s-.75.364-.75.778.336.75.75.75M4.94 9.159a.75.75 0 0 0 .75-.75v-.037a.735.735 0 0 0-.75-.732.767.767 0 0 0-.75.769c0 .414.335.75.75.75M17.344 18.8a.767.767 0 0 0-.75.77.75.75 0 0 0 1.5 0v-.038a.734.734 0 0 0-.75-.731M8.766 8.373c.414 0 .75-.364.75-.778a.75.75 0 0 0-1.5 0v.056c0 .414.336.722.75.722"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRetouchMagicWandBold;
