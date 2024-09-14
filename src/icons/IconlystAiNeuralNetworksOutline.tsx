import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralNetworksOutline = ({
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
      d="M5.035 9.76a.836.836 0 1 0 0 1.672.836.836 0 0 0 0-1.672m-2.336.836a2.336 2.336 0 1 1 4.672 0 2.336 2.336 0 0 1-4.672 0M18.114 17.785a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 .5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M19.229 9.033a.572.572 0 1 1 0 1.144.572.572 0 0 1 0-1.144m2.072.572a2.072 2.072 0 1 0-4.144 0 2.072 2.072 0 0 0 4.144 0M6.621 18.578a.836.836 0 1 1 0 1.672.836.836 0 0 1 0-1.672m2.337.836a2.336 2.336 0 1 0-4.673 0 2.336 2.336 0 0 0 4.673 0M12.453 3.75a.836.836 0 1 1 0 1.672.836.836 0 0 1 0-1.672m2.336.836a2.336 2.336 0 1 0-4.672 0 2.336 2.336 0 0 0 4.672 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.626 4.93a.75.75 0 0 1-.074 1.058L6.8 10.12a.75.75 0 1 1-.984-1.132l4.752-4.132a.75.75 0 0 1 1.058.074M5.676 11.198a.75.75 0 0 1 1.025-.276l10.633 6.118a.75.75 0 0 1-.748 1.3L5.953 12.223a.75.75 0 0 1-.277-1.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.718 9.95a.75.75 0 0 1-.14 1.05L8.24 18.893a.75.75 0 1 1-.91-1.192l10.336-7.892a.75.75 0 0 1 1.051.141M13.267 4.937a.75.75 0 0 1 1.05-.15L18.7 8.064a.75.75 0 0 1-.899 1.201l-4.383-3.279a.75.75 0 0 1-.15-1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.29 10.235c.41.053.7.43.647.84l-.786 6.065a.75.75 0 1 1-1.488-.193l.787-6.065a.75.75 0 0 1 .84-.647M17.73 18.804a.75.75 0 0 1-.683.812l-8.697.757a.75.75 0 0 1-.13-1.495l8.697-.756a.75.75 0 0 1 .813.682M5.012 11.546a.75.75 0 0 1 .873.602l1.024 5.561a.75.75 0 1 1-1.475.272L4.41 12.419a.75.75 0 0 1 .602-.873M18.62 9.685a.75.75 0 0 1-.693.803l-11.189.83a.75.75 0 1 1-.11-1.496l11.188-.83a.75.75 0 0 1 .804.693"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiNeuralNetworksOutline;
