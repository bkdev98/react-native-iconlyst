import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessageOutline = ({
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
      d="M11.868 2.864a.75.75 0 0 1-.602.874C8.754 4.2 7.203 6.403 7.203 8.28c0 .87-.107 1.539-.28 2.1-.173.559-.404.98-.608 1.336l-.06.103c-.18.313-.32.558-.43.856-.112.31-.197.694-.2 1.252.049.535.194.917.409 1.207.219.295.551.55 1.059.757 1.054.43 2.708.6 5.157.6 2.45 0 4.103-.167 5.158-.597.507-.207.84-.46 1.058-.756.215-.29.361-.674.41-1.211-.006-.982-.259-1.46-.577-2.015l-.054-.094c-.35-.607-.768-1.334-.902-2.622a.75.75 0 0 1 1.492-.156c.1.97.388 1.47.714 2.037l.052.089c.385.673.775 1.422.775 2.793l-.003.062c-.063.765-.28 1.442-.701 2.01s-1.001.968-1.698 1.253c-1.356.552-3.28.707-5.724.707s-4.369-.158-5.724-.711c-.697-.285-1.278-.687-1.697-1.253-.42-.567-.638-1.243-.701-2.007l-.003-.061c0-.738.112-1.307.292-1.8.157-.426.362-.782.536-1.084l.06-.104c.19-.333.354-.638.477-1.035s.213-.914.213-1.656c0-2.6 2.067-5.422 5.291-6.017a.75.75 0 0 1 .874.601M9.703 19.382a.75.75 0 0 1 1.055.117c.375.469.925.751 1.522.751.608 0 1.159-.284 1.533-.75a.75.75 0 0 1 1.171.936c-.64.8-1.61 1.314-2.704 1.314a3.45 3.45 0 0 1-2.694-1.314.75.75 0 0 1 .117-1.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.91 3.846a.99.99 0 1 0 0 1.979.99.99 0 0 0 0-1.98m-2.49.99a2.49 2.49 0 1 1 4.98 0 2.49 2.49 0 0 1-4.98 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewRingtoneMessageOutline;
