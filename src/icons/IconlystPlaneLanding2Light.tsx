import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLanding2Light = ({
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
      d="M3.586 12.494c1.23-.51 3.66-1.555 4.911-2.074L6.203 4.862c.62-.222 1.19-.479 1.785-.622.696-.166 1.295.15 1.808.598a186 186 0 0 1 3.495 3.118c.29.268.52.293.866.14.998-.44 2-.878 3.025-1.25 1.186-.427 2.874-.472 3.293 1.023.33 1.18-.685 2.186-1.686 2.607-3.319 1.4-6.643 2.79-9.987 4.131-2.381.956-4.266.12-5.276-2.248-.09-.212-.437-1.054-.526-1.267M17.045 17.934l1.977 1.87L21 17.935M19.023 19.804v-5.323M4.906 19.805h8.407"
    />
  </Svg>
);
export default IconlystPlaneLanding2Light;
