import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling3Outline = ({
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
      d="M18.18 13.583a.822.822 0 1 1 0 1.644.822.822 0 0 1 0-1.644M15.327 13.44a.822.822 0 1 1 0 1.643.822.822 0 0 1 0-1.643M16.452 16.031a.822.822 0 1 1 0 1.644.822.822 0 0 1 0-1.644"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.762 14.5a6.249 6.249 0 0 1-10.187 4.852.75.75 0 1 0-.946 1.165A7.749 7.749 0 1 0 8.407 9.729a.75.75 0 1 0 1.181.924A6.249 6.249 0 0 1 20.761 14.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.22 3.828c-.766-.74-1.848-.794-2.567-.016-.241.262-.332.508-.355.752-.026.265.024.569.135.936.074.244.157.463.247.7.054.146.112.298.172.467.14.398.286.874.286 1.356 0 1.626-.587 2.693-1.824 4.54C3.13 14.33 3.06 16 3.452 17.412c.4 1.44 1.29 2.63 2.04 3.333l.003.002a.1.1 0 0 0 .032.004h2.805a.1.1 0 0 0 .036-.006c.75-.702 1.64-1.893 2.04-3.333.39-1.41.32-3.081-.863-4.847-1.22-1.823-1.881-2.884-1.823-4.567.016-.475.161-.946.302-1.346q.08-.225.154-.426c.094-.256.18-.492.255-.745.21-.717.2-1.204-.212-1.652M4.55 2.795c1.404-1.52 3.48-1.252 4.732-.027l.023.023c.965 1.031.835 2.196.568 3.11-.088.302-.206.622-.31.905l-.124.34c-.134.386-.21.672-.218.903-.04 1.14.328 1.825 1.57 3.68 1.448 2.161 1.56 4.29 1.062 6.083-.49 1.764-1.559 3.183-2.46 4.028-.303.282-.689.41-1.061.41H5.527c-.372 0-.758-.128-1.06-.41-.903-.845-1.971-2.264-2.46-4.028-.498-1.793-.387-3.922 1.06-6.083 1.226-1.83 1.57-2.567 1.57-3.706 0-.209-.066-.478-.2-.856l-.134-.365c-.103-.272-.219-.582-.305-.866-.136-.448-.246-.97-.193-1.517a2.74 2.74 0 0 1 .746-1.624"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowling3Outline;
