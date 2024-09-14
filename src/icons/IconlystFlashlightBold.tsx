import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashlightBold = ({
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
      d="M18.625 6.875c-1.16-1.161-2.355-2.108-3.364-2.694-.5-.29-.994-.516-1.443-.62-.4-.091-1.034-.143-1.495.317l-.017.017-2.809 2.81a3.43 3.43 0 0 0-.972 1.946l-.246 1.722c-.066.46-.28.886-.608 1.215l-3.378 3.378a4.412 4.412 0 1 0 6.24 6.242l3.38-3.38c.207-.206.452-.367.72-.474a1 1 0 0 0 .166-.058c.119-.034.226-.06.33-.074h.001l1.72-.243.012-.002a4 4 0 0 0 .487-.11 3.44 3.44 0 0 0 1.446-.864l2.947-2.947-.12.12c.46-.46.408-1.094.316-1.494-.103-.449-.329-.944-.62-1.443-.586-1.01-1.533-2.204-2.693-3.364M13.89 5.758c-.116-.222.09-.428.31-.31q.117.06.245.135c.857.498 1.942 1.347 3.032 2.438 1.091 1.09 1.941 2.176 2.439 3.033q.075.128.136.244c.116.221-.09.427-.31.31a7 7 0 0 1-.245-.135c-.857-.498-1.942-1.348-3.033-2.439s-1.94-2.175-2.438-3.032a7 7 0 0 1-.136-.244M9.797 16.85a.81.81 0 1 0-1.146-1.146l-1.096 1.095a.81.81 0 1 0 1.147 1.147z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashlightBold;
