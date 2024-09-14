import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationAiAltOutline = ({
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
      d="M9.464 19.389a.75.75 0 0 1 1.054.117c.372.464.918.744 1.511.744a1.94 1.94 0 0 0 1.52-.744.75.75 0 1 1 1.171.937 3.44 3.44 0 0 1-2.69 1.307 3.44 3.44 0 0 1-2.683-1.307.75.75 0 0 1 .117-1.054M12 3.75c-3.063 0-5.016 2.497-5.016 4.6 0 .865-.106 1.531-.278 2.09a6.3 6.3 0 0 1-.606 1.33l-.059.102c-.18.312-.319.554-.427.85-.113.308-.197.69-.2 1.244.049.53.193.91.406 1.197.218.293.548.546 1.052.752 1.048.428 2.692.597 5.127.597 2.436 0 4.08-.167 5.127-.594.504-.205.834-.457 1.051-.751.213-.287.358-.668.407-1.201-.003-.562-.089-.948-.204-1.257-.108-.291-.244-.528-.42-.832l-.078-.137a.75.75 0 1 1 1.302-.744l.073.125c.171.298.374.649.529 1.065.184.495.298 1.067.298 1.811q0 .032-.002.063c-.064.761-.28 1.435-.7 2-.418.565-.996.965-1.69 1.247-1.349.55-3.263.705-5.693.705s-4.345-.157-5.694-.708c-.694-.284-1.272-.684-1.69-1.247-.418-.565-.635-1.238-.698-1.997l-.003-.063c0-.733.111-1.3.291-1.79.156-.425.36-.779.534-1.08l.06-.103c.189-.33.352-.634.474-1.028.121-.394.211-.908.211-1.646 0-2.904 2.597-6.1 6.515-6.1a6.56 6.56 0 0 1 4.186 1.468.75.75 0 0 1-.947 1.163 5.06 5.06 0 0 0-3.239-1.131"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.528 6.781a.75.75 0 0 0-.703.49l-.101.274a3.01 3.01 0 0 1-1.78 1.781l-.272.102a.75.75 0 0 0 0 1.406l.273.101a3.01 3.01 0 0 1 1.778 1.782l.101.273a.75.75 0 0 0 1.408 0l.1-.273a3.01 3.01 0 0 1 1.78-1.782l.272-.1a.75.75 0 0 0 0-1.407l-.273-.102a3.01 3.01 0 0 1-1.778-1.781l-.101-.274a.75.75 0 0 0-.704-.49m.949 3.35a4.5 4.5 0 0 0-.949.95 4.5 4.5 0 0 0-.949-.95c.362-.268.682-.588.949-.95.267.362.587.682.949.95M19.084 4.873a.75.75 0 0 0-.718.531c-.099.326-.353.58-.677.68a.75.75 0 0 0 0 1.434c.324.1.578.354.677.68a.75.75 0 0 0 1.436 0 1.02 1.02 0 0 1 .677-.68.75.75 0 0 0 0-1.434 1.02 1.02 0 0 1-.677-.68.75.75 0 0 0-.718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotificationAiAltOutline;