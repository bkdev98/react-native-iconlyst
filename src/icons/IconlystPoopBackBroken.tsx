import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopBackBroken = ({
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
      d="M15.785 10.3c.333-.527.56-1.125.632-1.75.223-1.985-1.232-3.3-2.794-4.059-.431-.21-.94-.473-1.411-.552.018.074.845 1.441-1.46 3.363-.314.37-1.11 1.162-1.077 2.08.017.433.154.867.393 1.221"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.71 9.043c-1.712.104-3.082 1.597-3.082 3.42 0 .132.018.256.036.388 0 .019.01.047.01.065-1.523.293-2.686 1.683-2.686 3.364 0 1.89 1.478 3.062 3.27 3.43.738.111 1.588.193 2.488.249m6.576-10.906c1.685.132 3.01 1.606 3.01 3.41 0 .152-.02.303-.037.453 1.532.284 2.693 1.673 2.693 3.364 0 1.89-1.44 3.042-2.98 3.43-.813.2-3.093.345-5.601.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.975 14.924c-.473-.334-1.184-1.003-1.311-2.076M17.986 14.924c.473-.334 1.183-1.003 1.31-2.076"
    />
  </Svg>
);
export default IconlystPoopBackBroken;
