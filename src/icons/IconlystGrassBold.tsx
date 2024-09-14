import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrassBold = ({
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
      d="M12.052 4.41a.49.49 0 0 0-.487-.182.484.484 0 0 0-.382.549c.204 1.332.172 2.693-.034 4.024a.48.48 0 0 0 .076.37l.607.875.265.38a.49.49 0 0 0 .52.197.484.484 0 0 0 .37-.467 30 30 0 0 0-.147-2.754c-.068-.641-.154-1.282-.314-1.908-.103-.38-.224-.771-.474-1.085"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.571 4.645a.49.49 0 0 0-.578.053c-1.458 1.395-2.586 3.102-3.432 4.92-.91 1.952-1.51 4.03-1.973 6.127-.55-2.119-1.306-4.206-2.472-6.074A14.2 14.2 0 0 0 7.27 6.347a.49.49 0 0 0-.507-.073.48.48 0 0 0-.284.529q.128.547.222 1.1c.308 1.828.413 3.694.24 5.541a14.4 14.4 0 0 0-2.486-2.912l-.04-.036c-.127-.114-.263-.237-.444-.234-.295-.013-.55.28-.488.566.427 1.685.806 3.384 1.067 5.104.116.798.214 1.6.217 2.408H3.715a.73.73 0 0 0-.692.543.724.724 0 0 0 .38.824c.144.08.309.077.469.075h17.293a.9.9 0 0 0 .36-.044.73.73 0 0 0 .473-.722.72.72 0 0 0-.67-.675 32 32 0 0 0-.595-.002h-.398c.018-1.38.322-2.739.683-4.066q.22-.795.49-1.573c.102-.302-.17-.64-.488-.615-.175.002-.303.115-.426.226q-.048.043-.097.083a29 29 0 0 0-1.973 1.838c-.234-1.43-.303-2.881-.264-4.327.049-1.608.22-3.214.54-4.792a.48.48 0 0 0-.229-.468M7.612 18.34h-1.01a12 12 0 0 0 .787-2.017q.433.984.728 2.017zm11.117 0h-1.725a7.8 7.8 0 0 1 .998-1.973c.195.673.434 1.334.727 1.973"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGrassBold;