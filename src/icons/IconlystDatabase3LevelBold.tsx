import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabase3LevelBold = ({
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
      d="M4.446 10.6c.418.442.93.72 1.462.951.783.34 1.598.553 2.426.713.81.157 1.625.253 2.444.298 1.584.087 3.161.016 4.728-.266.953-.172 1.89-.415 2.78-.83.476-.223.93-.488 1.298-.897a1.45 1.45 0 0 0 .39-1.028l-.009-1.284a.186.186 0 0 0-.288-.159q-.111.069-.222.132c-1.293.732-2.692 1.068-4.119 1.285-.665.101-1.336.161-2.006.208a21 21 0 0 1-3.886-.098 17.3 17.3 0 0 1-2.773-.534c-.72-.205-1.426-.459-2.087-.839l-.25-.15a.197.197 0 0 0-.3.17c0 .246 0 .64-.007 1.247-.005.437.14.786.42 1.081M4.545 6.115c.458.438 1.003.71 1.568.937 1.019.409 2.078.633 3.152.778.906.122 1.817.184 2.552.173 1.714.002 3.234-.142 4.731-.52.745-.188 1.474-.433 2.156-.82.375-.212.725-.461.996-.823.358-.48.364-1.04-.001-1.512a2.7 2.7 0 0 0-.424-.44c-.581-.474-1.25-.75-1.937-.978-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.465-.061-5.183.259-.933.173-1.848.416-2.719.827-.465.219-.908.48-1.264.882-.296.334-.47.715-.345 1.192.079.304.259.537.472.74M5.908 16.21c.783.34 1.598.552 2.426.713.81.156 1.624.252 2.444.297a20.2 20.2 0 0 0 4.727-.266c.954-.172 1.89-.415 2.781-.83.476-.223.93-.488 1.298-.897.256-.285.393-.616.39-1.028l-.009-1.29a.182.182 0 0 0-.283-.155 7 7 0 0 1-.227.135c-1.292.731-2.691 1.067-4.118 1.284-.665.101-1.336.161-2.008.208-1.296.092-2.593.05-3.885-.097a17 17 0 0 1-2.773-.535c-.722-.204-1.426-.459-2.087-.839l-.25-.15a.197.197 0 0 0-.3.17c0 .247 0 .64-.007 1.248-.005.437.14.785.42 1.08.416.443.927.72 1.461.951M19.97 17.318c0-.068-.072-.106-.132-.073-.375.203-.741.432-1.128.604-1.371.608-2.813.89-4.278 1.058-.89.1-1.781.133-2.674.127a18.4 18.4 0 0 1-2.611-.18 28 28 0 0 1-2.196-.423c-.85-.2-1.672-.498-2.441-.953l-.175-.105a.196.196 0 0 0-.3.169c.001.24 0 .619-.01 1.208-.008.523.189.91.537 1.234.404.376.873.627 1.363.835.872.37 1.779.593 2.7.75a19 19 0 0 0 2.642.263c1.524.048 3.04-.041 4.542-.341.864-.173 1.71-.404 2.519-.788.46-.22.898-.48 1.254-.875.26-.29.396-.625.393-1.04-.008-.821-.006-1.258-.005-1.47"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabase3LevelBold;
