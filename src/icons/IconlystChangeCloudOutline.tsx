import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangeCloudOutline = ({
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
      d="M12.212 11.196c.634-.838 1.653-1.508 3.106-1.508s2.472.67 3.106 1.508c.428.566.684 1.21.8 1.783.66.12 1.27.411 1.753.873.65.62 1.023 1.502 1.023 2.544a3.48 3.48 0 0 1-2.075 3.187c-.497.2-.99.275-1.381.275h-6.456a3.8 3.8 0 0 1-1.406-.29 3.48 3.48 0 0 1-2.047-3.172c0-1.042.373-1.923 1.024-2.544a3.4 3.4 0 0 1 1.753-.873 4.45 4.45 0 0 1 .8-1.783m1.196.905c-.407.538-.568 1.185-.568 1.566a.75.75 0 0 1-.744.75c-.582.005-1.068.201-1.402.52-.328.313-.56.79-.56 1.46 0 .795.472 1.484 1.153 1.798.3.12.595.163.8.163h6.457c.208 0 .504-.042.809-.161a1.98 1.98 0 0 0 1.147-1.8c0-.67-.231-1.147-.559-1.46-.334-.319-.819-.515-1.4-.52a.75.75 0 0 1-.745-.75c0-.38-.16-1.028-.568-1.566-.384-.507-.98-.914-1.91-.914s-1.526.407-1.91.914M4.522 14.379a.75.75 0 0 1 .533.214l1.309 1.281a.75.75 0 1 1-1.05 1.072l-.772-.756-.756.772a.75.75 0 0 1-1.072-1.049l1.28-1.309a.75.75 0 0 1 .528-.225"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.51 14.402a.75.75 0 0 1 .75.75v1.295a2.486 2.486 0 0 0 2.486 2.486.75.75 0 0 1 0 1.5 3.986 3.986 0 0 1-3.986-3.986v-1.295a.75.75 0 0 1 .75-.75M6.321 4.999c.6-.794 1.566-1.429 2.94-1.429 1.375 0 2.341.635 2.942 1.429.396.523.636 1.118.749 1.653.498.095.965.294 1.366.597a.75.75 0 1 1-.904 1.197c-.292-.22-.684-.356-1.143-.36a.75.75 0 0 1-.744-.75c0-.345-.147-.939-.52-1.432-.35-.463-.893-.834-1.745-.834s-1.395.371-1.745.834c-.373.493-.52 1.087-.52 1.433a.75.75 0 0 1-.744.75c-.533.004-.974.184-1.275.472-.296.282-.507.713-.507 1.327 0 .723.426 1.348 1.045 1.634.275.109.544.149.729.149H8.27a.75.75 0 0 1 0 1.5H6.245a3.6 3.6 0 0 1-1.334-.276 3.3 3.3 0 0 1-1.94-3.007c0-.985.353-1.822.97-2.412a3.2 3.2 0 0 1 1.631-.822c.112-.535.353-1.13.749-1.653M15.315 4.797a.75.75 0 0 1 .75-.75 3.986 3.986 0 0 1 3.986 3.985v1.295a.75.75 0 0 1-1.5 0V8.032a2.486 2.486 0 0 0-2.486-2.485.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.086 7.507a.75.75 0 0 1 .012 1.06l-1.28 1.31a.75.75 0 0 1-1.061.01l-1.31-1.28a.75.75 0 0 1 1.05-1.073l.773.757.756-.773a.75.75 0 0 1 1.06-.011"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangeCloudOutline;
